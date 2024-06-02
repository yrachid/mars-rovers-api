import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { provider, s3Bucket } from '@cdktf/provider-aws';

export class AwsS3BucketStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new provider.AwsProvider(this, 'provider', {
      region: 'us-east-2',
    });

    new s3Bucket.S3Bucket(this, 'a-bucket');
  }
}
