import React from 'react';
const Rank = ({ name, entries }) => {
  return (
    <div>
        <div className='white f3'>
            {`Mark, your current rank is... `}
        </div>
        #5
        <div className='white f1'>
          {entries}
            {/* <Rank name={this.state.user.name} entries={this.state.user.entries}/>  */}
            {/* {'#1'} */}
        </div>
    </div>
  );
}

export default Rank;