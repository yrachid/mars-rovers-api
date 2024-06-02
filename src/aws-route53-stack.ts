import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { provider, dataAwsAlb, route53Record } from '@cdktf/provider-aws';

export class AwsRoute53Stack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new provider.AwsProvider(this, 'provider', {
      region: 'us-east-2',
    });

    new dataAwsAlb.DataAwsAlb(this, 'data-alb', {
      name: 'bla-bla-bla',
    });

    new route53Record.Route53Record(this, 'new-record', {
      name: 'blabla',
      records: ['8.8.8.8'],
      type: 'A',
      zoneId: 'abc',
    });
  }
}
