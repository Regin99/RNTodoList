import Svg, {Path, SvgProps} from 'react-native-svg';

export const AlertIcon = (props: SvgProps) => {
  return (
    <Svg width={25} height={25} viewBox="-0.5 0 25 25" fill="none" {...props}>
      <Path
        d="M10.88 16.15a1.12 1.12 0 011.13-1.12 1.11 1.11 0 11-1.13 1.12zm.36-2.73L11.1 8.2a.898.898 0 011.262-.917.9.9 0 01.529.917l-.13 5.22a.76.76 0 11-1.52 0z"
        fill="red"
      />
      <Path
        d="M12 21.5A9.25 9.25 0 1012 3a9.25 9.25 0 000 18.5z"
        stroke="red"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
