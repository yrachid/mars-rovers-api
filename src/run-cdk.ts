import { App } from 'cdktf';
import { AwsS3BucketStack } from './aws-s3-stack';
import { AwsRoute53Stack } from './aws-route53-stack';

const app = new App();

const s3 = new AwsS3BucketStack(app, 'test-s3');
const r53 = new AwsRoute53Stack(app, 'test-route-53');

console.log(JSON.stringify(s3.toTerraform()));
console.log(JSON.stringify(r53.toTerraform()));
