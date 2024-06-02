import { App } from 'cdktf';
import { AwsS3BucketStack } from './src/aws-s3-stack';
import { AwsRoute53Stack } from './src/aws-route53-stack';

const app = new App();

const s3 = new AwsS3BucketStack(app, 'test-s3');
const r53 = new AwsRoute53Stack(app, 'test-route-53');

const consolidated = {
  stacks: {
    s3: s3.toTerraform(),
    route53: r53.toTerraform(),
  },
};

console.log(JSON.stringify(consolidated));
