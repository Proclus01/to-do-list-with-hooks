import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Grid } from "@material-ui/core";

function TodoApp() {
  return (
    <Paper
        style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
    >
        <AppBar color='primary' position='static' style={{ height: "64px" }}>
            <Toolbar>
                <Typography color='inherit'>
                    TO DOS WITH HOOKS
                </Typography>
            </Toolbar>
        </AppBar>
    </Paper>
    );
}

export default TodoApp;
