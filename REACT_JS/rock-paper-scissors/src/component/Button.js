import React from 'react'

const Button = ({ onClick, choice }) => {
  return (
    <button onClick={()=>onClick(choice)}>
        {choice}
    </button>
  );
}

export default Button


// import React from 'react'

// const Button = (props) => {
//   return (
//     <button onClick={() => props.onClick(props.choice)}>
//       {props.choice}
//     </button>
//   );
// }

// export default Button


// [Destructuring VS Entire Props Object]
// - Destructuring Assignment: Each prop is explicitly handled, which improves readability, and only the necessary props can be selectively extracted.
// - Entire Props Object: Allows handling all the props passed to the component at once, and there is no need to change the internal code when adding or modifying props later.