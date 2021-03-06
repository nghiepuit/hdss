import React, { forwardRef, useMemo, useRef } from 'react';
import cn from '../../../utils/classnames';
// import CheckMark from '@hdbank/icons/components/CheckMark'
// import Times from '@hdbank/icons/components/Times'
import { BaseComponent, OverrideProps } from '../BaseComponent';
import Icon, { IconProps } from '../Icon';
import InputBase from '../InputBase';
import styles from './styles.module.scss';
import { ToggleColors } from './types';

export * from './types';

interface ToggleTypeMap<P = {}, D extends React.ElementType = 'label'> {
  props: P & {
    /**
     * Set name of `InputBase` component
     */
    name?: string;
    /**
     * Toggle color
     */
    color?: ToggleColors;
    /**
     * Use ref of `Icon` component
     */
    iconRef?: React.Ref<unknown>;
    /**
     * Pass all props to `Icon` component
     */
    iconProps?: IconProps;
    /**
     * Set component is `checked`
     */
    checked?: boolean;
    /**
     * Callback fired on change value of checkbox, value is `boolean`
     */
    onChange?: React.EventHandler<React.SyntheticEvent>;
    /**
     * Set component is `disabled`
     */
    disabled?: boolean;
  };
  defaultComponent: D;
}

export type ToggleProps<
  D extends React.ElementType = ToggleTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ToggleTypeMap<P, D>, D>;

interface ToggleDefaultProps {
  component: React.ElementType;
  color: ToggleColors;
  disabled: boolean;
}

const defaultProps: ToggleDefaultProps = {
  component: 'label',
  color: ToggleColors.red,
  disabled: false,
};

export type ToggleComponent = BaseComponent<ToggleTypeMap> & {
  displayName?: string;
};

export const Toggle: ToggleComponent = forwardRef((props: ToggleProps, ref) => {
  const {
    component: Component,
    className,
    disabled,
    onChange,
    checked,
    name,
    color,
    iconRef,
    iconProps,
    children,
    ...rest
  } = { ...defaultProps, ...props };

  const refOfInput = useRef();

  const classOfRoot = cn(styles.root, className, {
    [styles.disabled]: disabled,
    [styles.checked]: checked,
    [styles[color]]: !!color,
  });

  const _children = useMemo(
    () => children && <span className={styles.content}>{children}</span>,
    [children]
  );

  // const _mark = useMemo(() => (checked ? CheckMark : Times), [checked])
  const _mark = useMemo(() => (checked ? null : null), [checked]);

  return (
    <Component {...rest} ref={ref} className={classOfRoot} role="checkbox">
      <div className={styles.icon}>
        <div className={styles.dot} />
        <div className={styles.nav}>
          <Icon component={_mark} className={styles.mark} />
        </div>
      </div>
      {_children}
      <InputBase
        readOnly
        type="checkbox"
        ref={refOfInput}
        name={name}
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
    </Component>
  );
});

Toggle.displayName = 'Toggle';

export default Toggle;
