import { DataAwsAlb } from '@cdktf/provider-aws/lib/data-aws-alb';
import { AwsProvider } from '@cdktf/provider-aws/lib/provider';
import { Route53Record } from '@cdktf/provider-aws/lib/route53-record';
import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';

export class AwsRoute53Stack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, 'provider', {
      region: 'us-east-2',
    });

    new DataAwsAlb(this, 'data-alb', {
      name: 'bla-bla-bla',
    });

    new Route53Record(this, 'new-record', {
      name: 'blabla',
      records: ['8.8.8.8'],
      type: 'A',
      zoneId: 'abc',
    });
  }
}
