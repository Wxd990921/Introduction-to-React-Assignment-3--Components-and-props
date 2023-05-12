import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
const doc = window.document
 
const Dialog = () => {
    const [node, setNode] = useState(doc.createElement('div'))
 
    useEffect(() => {
        if (node) {
            doc.body.appendChild(node)
        } else {
            const node = doc.createElement('div')
            setNode(node)
        }
        
        return () => {
            node && doc.body.removeChild(node)
        }
    },[node])
 
    return createPortal(
        <div className="dialog">
            <h3>Dialog</h3>
        </div>,
        node
    )
}
 
export default Dialog