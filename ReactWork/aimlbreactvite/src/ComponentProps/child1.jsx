import React from 'react'
import child2 from './child2'

function child1({child1data}) {
  return (
    <div>child1
        <child2 child2data={child1data} />
    </div>
  )
}

export default child1