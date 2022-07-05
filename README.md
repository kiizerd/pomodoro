# Pomodoro Timer

A Pomodoro timer made with Typescript, React and styled-components.  
Bootstrapped with `create-react-app`.

The main purpose of this project was to have something simple to build to teach myself Typescript.  I'd say in that regard it went decently well, I got a good handle of the syntax and the basic typing system. The intellisence provided by VSCode definitely helped prevent some would-be errors.  

My biggest challenge in this project was getting a timer to tick every second within React.  
The solution was the `useEffect` hook and the JS `setInterval` method.

The main `App` component handles state for the timer.  
`App` consists of 4 sub components:  

 ### `Selector`
 #### Has buttons to select the current timer length.
  ---
  Sets `App` timerLength state to...
   - Work button  -- 25 minutes.
   - Short button -- 5 minutes.
   - Long button  -- 15 minutes.

### `Timer`
#### A gradient filled circle with a countdown timer in the center.
 ---
 Displays current time from `App` timer state value.  
 Starts with a red-orange gradient that transitions to green-blue as the countdown timer approaches zero.

 ### `Controls`
 #### Has buttons to start/stop and reset the timer.
  ---
  Controls the `App` isActive state.
  - Start/Stop button -- Relevant button displayed on context. Toggles `App` isActive state.
  - Reset button      -- Resets `App` timer state to 0.

  ### `Stats`
  #### Displays the number of respective timers completed in a fancy little dropdown.
   ---