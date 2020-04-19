import React from 'react';
import { ProjectType } from '../../../types';

import {
  TextLogo,
  Image,
  Container
} from './ProjectLogoStyle';

interface Props {
  project: ProjectType;
  withBackground?: boolean;
}

const ProjectLogo: React.FC<Props> = (props: Props) => {
  const { project, withBackground = true } = props;
  const {
    title,
    backgroundColor,
    imagesFolder,
  } = project;

  const hasImageLogo = imagesFolder !== undefined;
  const children = hasImageLogo
    ? <ImageLogo project={project}/>
    : <TextLogo>{title}</TextLogo>;

  if (!withBackground) return children;

  return (
    <Container
      style={{ backgroundColor }}
      children={children}
    />
  );
};

const ImageLogo: React.FC<Props> = ({ project }: Props) => {
  const { imagesFolder, title } = project;

  const logoUrl = `/images/projects/${imagesFolder}/logo.png`;

  return (
    <Image src={logoUrl} alt={title} />
  )
};

export default ProjectLogo;
