import { describe, it, beforeEach } from 'node:test';
import { App, Testing } from 'cdktf';
import { AwsRoute53Stack } from './aws-route53-stack';
import assert from 'node:assert/strict';

describe('AwsStack', () => {
  let tfApp: App;
  let stack: AwsRoute53Stack;

  beforeEach(() => {
    tfApp = Testing.app();
    stack = new AwsRoute53Stack(tfApp, 'aws-stack');
  });

  it('has a provider', () => {
    const synthed: Record<string, any> = JSON.parse(Testing.synth(stack));

    assert.equal(synthed.data.aws_alb['data-alb'].name, 'bla-bla-bla');
  });
});
