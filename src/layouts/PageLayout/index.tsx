/** @jsxImportSource @emotion/react */
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { pageLayoutHeaderBtn, pageLayoutHeaderTitle } from './styles';

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Stack spacing={4} paddingX={4} paddingTop={4}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <h2 css={pageLayoutHeaderTitle}>Invoice List</h2>
        <Button css={pageLayoutHeaderBtn} variant="contained" size="large" startIcon={<AddIcon />}>Add New</Button>
      </Stack>
      {children}
    </Stack>
    );
}

export default PageLayout;