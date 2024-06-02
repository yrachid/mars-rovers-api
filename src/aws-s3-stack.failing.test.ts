import { describe, it, beforeEach } from 'node:test';
import { App, Testing } from 'cdktf';
import { AwsS3BucketStack } from './aws-s3-stack';
import assert from 'node:assert/strict';

describe('AwsS3Stack', () => {
  let tfApp: App;
  let stack: AwsS3BucketStack;

  beforeEach(() => {
    tfApp = Testing.app();
    stack = new AwsS3BucketStack(tfApp, 'aws-s3-stack');
  });

  it('has a provider', () => {
    const synthed: Record<string, any> = JSON.parse(Testing.synth(stack));

    assert.equal(synthed.provider.aws[0].region, 'us-east-1');
  });
});
