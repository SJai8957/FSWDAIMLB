import React from 'react'

function child2(child2data) {
  return (
    <div>child2
        {/* branch:{child2data.branch} */}
        <child3 child3data></child3>
    </div>
  )
}

export default child2