import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const DisplayField = (props) => {
  const text = props.text;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <TextField
      value={text}
      InputProps={{
        readOnly: true,
        style: { color: 'rgba(0, 0, 0, 0.54)' },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleCopy}>
              <ContentCopyIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export { DisplayField };
