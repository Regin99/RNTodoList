import Svg, {Path, SvgProps} from 'react-native-svg';

export const TrashIcon = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M3 6.99a26.38 26.38 0 0118 0M8.01 5.72a4 4 0 118 0M12 13v5M19 9.99l-.67 8a4.44 4.44 0 01-4.33 4h-4a4.44 4.44 0 01-4.33-4l-.67-8"
        stroke="red"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
