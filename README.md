# Complete React Course for Creating Amazing UI

## Files that we changed in this video:
- package.json and package-lock.json (due to the npm installation of material-ui)
- public/index.html (where we pasted in stylesheets necessary for material-iu)
- src/App.css (our custom CSS)
- src/App.js (where we imported and used material-ui components)

## Timestamps of the code we copied in this lecture

4:38 - In your terminal, type in:
```
npm install @material-ui/core --save
```

5:00 - In public/index.html, inside the `<head></head>` section, put in:
```
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

6:40 - In `src/App.js`, paste in this import:
```
import Card from '@material-ui/core/Card';
```

10:30 - The CSS from uigradients.com that we added into `src/App.css`:
```
background: #0cebeb;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
```

11:54 - The import line for `<TextField>` that we added in `src/App.js`:
```
import TextField from '@material-ui/core/TextField';
```

16:50 - The sample code for `<List>` component that we copied and put in `src/App.js`:
```
<List dense={dense}>
  {generate(
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Single-line item"
        secondary={secondary ? 'Secondary text' : null}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>,
  )}
</List>
```

18:00 - The imports that we added in `src/App.js`:
```
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
```
