import React from 'react';
import { ProjectType } from '../../../types';

import {
  TextLogo,
  Image,
  Container
} from './ProjectLogoStyle';
import { Colors } from '../../../constants';

interface Props {
  project: ProjectType;
  withBackground?: boolean;
}

const ProjectLogo: React.FC<Props> = (props: Props) => {
  const { project, withBackground = true } = props;
  const {
    title,
    imagesFolder,
    backgroundColor = Colors.blueGreyish,
    textColor = Colors.fog,
  } = project;

  const style = {
    background: backgroundColor,
    color: textColor
  };

  const hasImageLogo = imagesFolder !== undefined;
  const children = hasImageLogo
    ? <ImageLogo project={project}/>
    : <TextLogo style={{ color: textColor }}>{title}</TextLogo>;

  if (!withBackground) return children;

  return (
    <Container
      style={style}
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
