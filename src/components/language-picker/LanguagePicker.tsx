import { MenuItem, Select, Typography } from '@mui/material';
import i18n from 'i18next';

import { SupportedLanguage } from '@/utils/enums';

export const LanguagePicker: React.FC = () => {
  return (
    <Select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      sx={{ color: 'white' }}
    >
      <MenuItem value={SupportedLanguage.EN}>
        <Typography>en</Typography>
      </MenuItem>
      <MenuItem data-testid="language-ua" value={SupportedLanguage.UK}>
        <Typography>uk</Typography>
      </MenuItem>
    </Select>
  );
};
