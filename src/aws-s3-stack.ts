import { AwsProvider } from '@cdktf/provider-aws/lib/provider';
import { S3Bucket } from '@cdktf/provider-aws/lib/s3-bucket';
import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';

export class AwsS3BucketStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, 'provider', {
      region: 'us-east-2',
    });

    new S3Bucket(this, 'a-bucket');
  }
}
