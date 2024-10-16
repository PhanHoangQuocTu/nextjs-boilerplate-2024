import { type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react';
import { HelpCircle, X } from 'lucide-react';

import alignLeft from './svg/align-left.svg';
import minus from './svg/minus.svg';
import plus from './svg/plus.svg';
import telegram from './svg/telegram.svg';
import twitter from './svg/twitter.svg';

const IconList = {
  twitter,
  telegram,
  alignLeft,
  x: X,
  plus,
  minus,
  helpCircle: HelpCircle,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
