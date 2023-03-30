import React from 'react'
import './Transportation.css'

export const Transport = () => {
  return (
    <>
    {/* transport 1 */}
   <div className='transport transport1'>
        <div className='transport_overlay'>
            <div className="innertext">
                <h6>Liquid Transportation</h6>
                <small>Premium Tankers</small>
            </div>
        </div>
   </div>
    {/* transport 2 */}
   <div className='transport transport2'>
        <div className='transport_overlay'>
            <div className="innertext">
                <h6>Packaging Solutions</h6>
                <small>Warehouse Management</small>
            </div>
        </div>
   </div>
    {/* transport 3 */}
   <div className='transport transport3'>
        <div className='transport_overlay'>
            <div className="innertext">
                <h6>Contract Logistics</h6>
                <small>Road Transportation</small>
            </div>
        </div>
   </div>
    {/* transport 4 */}
   <div className='transport transport4'>
        <div className='transport_overlay'>
            <div className="innertext">
                <h6>Warehouse & Distribution</h6>
                <small>Large Warehouse</small>
            </div>
        </div>
   </div>
    {/* transport 5 */}
   <div className='transport transport5'>
        <div className='transport_overlay'>
            <div className="innertext">
                <h6>Specialized Transport</h6>
                <small>Ocean Transport</small>
            </div>
        </div>
   </div>
    </>
  )
}
