import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { App, Testing } from 'cdktf';
import { DockerContainerStack } from './docker-stack';

describe('CDK DockerStack', () => {
  let tfApp: App;
  let stack: DockerContainerStack;

  beforeEach(() => {
    tfApp = Testing.app();
    stack = new DockerContainerStack(tfApp, 'docker-stack');
  });

  it('has docker provider', () => {
    const synthed: Record<string, any> = JSON.parse(Testing.synth(stack));

    assert.equal(synthed, { ok: 'abcd' });
  });
});
