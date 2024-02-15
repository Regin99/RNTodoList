import Svg, {Path, SvgProps} from 'react-native-svg';

export const CrossIcon = (props: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="-0.5 0 25 25" fill="none" {...props}>
      <Path
        d="M3 21.32l18-18M3 3.32l18 18"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
