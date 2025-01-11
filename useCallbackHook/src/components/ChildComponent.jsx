import React from 'react'


const ChildComponent = React.memo(    // React.memo() prevents unnecessary renders
    (props) => {
        console.log("Child component got re rendered")
      return (
        <div>
          <button onClick={props.handleChange}>
            {props.buttonName}
          </button>
        </div>
      )
    }
)

export default ChildComponent
// when we wrap a component with React.memo it renders only when prop value will change otherwise they don't render for same props value
// Limitation of useCallback --> whenever you pass a function in a prop it re-renders because function's reference will change so to overcome this limitation we use useCallback Hook