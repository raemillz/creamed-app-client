import React from 'react';
import { Grid } from 'semantic-ui-react';
import '../styles/siteinstructions.css';

class SiteInstructions extends React.Component {
  render() {
    return (
      <div>
        <center>
          <br/>
          <h1>WHAT IS CRÈME DE LA CREAM?</h1>
          <br/>
        </center>
        <Grid columns={3}>
          <Grid.Column>
            <center><img src='http://pngimg.com/uploads/ice_cream/ice_cream_PNG21002.png' height="80" width="40" alt="ice cream cone"/></center>
            <h3> CRAVE </h3>
            <p>We LOVE ice cream. Browse both the classics and the bizarre right here! Just try not to drool all over your keyboard in the process.</p>
          </Grid.Column>
          <Grid.Column>
            <center><img src='http://pngimg.com/uploads/ice_cream/ice_cream_PNG20975.png' height="80" width="40" alt="ice cream cone"/></center>
            <h3> CREATE </h3>
            <p>Ever searching for an ice cream flavor that you just can't find? Invent it here and share your creation with others! Who knows, maybe Ben or Jerry will be inspired.</p>
          </Grid.Column>
          <Grid.Column>
            <center><img src='http://pngimg.com/uploads/ice_cream/ice_cream_PNG5098.png' height="80" width="40" alt="ice cream cone"/></center>
            <h3> VOTE </h3>
            <p>Let your voice be heard by giving your favorite ice creams a "yum!" and watch them rise to the top.</p>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default SiteInstructions
