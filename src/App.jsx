/* App.js */
import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h7">
          戯言〜暇を潰せるコンテンツ〜
        </Typography>

        <Box component="form" noValidate sx={{ mt:1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label=""
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullheight
            variant="contained"
            sx={{ mt:3, mb:2 }}
          >
            恥の多い生涯を送ってきました
          </Button>
          <Button
            type="submit"
            fullheight
            variant="contained"
            sx={{ mt:1, mb:1 }}
          >
            音は鳴る
          </Button>
          <Button
            type="submit"
            fullheight
            variant="body2"
            sx={{ mt:3, mb:2 }}
          >
           俺って、実は立花なんだよね
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
              シェイクスピアの名言、著作権のせいで翻訳が変。ちょっと韻踏んでる。
              </Link>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2">
                orenokati
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default App;