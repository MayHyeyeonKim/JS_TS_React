# Errors that I met

In React, while images linked via web URLs display correctly, images stored locally do not show up when using a regular path. There are three methods to resolve this issue.

### Solutions
- Create an img folder inside the public folder and save all the images there. Then, you can use an absolute path to load the images.
```
<img src="/img/imgfile.png"/>
```

- Use the import statement to load the images.
```
import imgfile from './imgfile.png';
<img src={imgfile} />
```

- Use the require method, which, like import, is only usable within the src folder.
```
<img src={require("./imgfile.png").default}/>
```






