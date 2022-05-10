import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPencilRuler,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';

interface Skill {
  title: string;
  icon: React.ReactNode;
  list: string[];
}

const baseSkills = [
  {
    key: 'programming',
    icon: (
      <img
        src={require('@assets/icons/font-awesome5/fa-solid_code.svg')}
        alt="Code icon"
      />
    ),
  },
  {
    key: 'design',
    icon: <FontAwesomeIcon icon={faPencilRuler} />,
  },
  {
    key: 'soft',
    icon: <FontAwesomeIcon icon={faPeopleGroup} />,
  },
];

export const useSkills = (): Skill[] => {
  const { t } = useTranslationWithFallback('home');

  const toSkill = ({ key, icon }: typeof baseSkills[0]): Skill => ({
    title: t(`skills.categories.${key}.title`),
    icon,
    list: t(`skills.categories.${key}.list`).split(','),
  });

  return baseSkills.map(toSkill);
};

library.add(faPencilRuler, faPeopleGroup);
