import { adSimplifierTheme } from '@/themes/adSimplifier-theme';

const HorizontalLine = () => {
  return (
    <hr
      style={{
        background: adSimplifierTheme.palette.primary.main,
        height: '5px',
        border: 'none',
      }}
    />
  );
};

export { HorizontalLine };
