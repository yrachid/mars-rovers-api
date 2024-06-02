import { DockerProvider } from '@cdktf/provider-docker/lib/provider';
import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { Image } from '@cdktf/provider-docker/lib/image';
import { Container } from '@cdktf/provider-docker/lib/container';

export class DockerContainerStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new DockerProvider(this, 'docker', {});

    const dockerImage = new Image(this, 'nginxImage', {
      name: 'nginx:latest',
      keepLocally: false,
    });

    new Container(this, 'nginxContainer', {
      name: 'nginx-container',
      image: dockerImage.name,
      ports: [
        {
          internal: 80,
          external: 8000,
        },
      ],
    });
  }
}
