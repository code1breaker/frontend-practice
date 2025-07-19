import { checkboxesData } from "../pages/feature";
import { useState } from "react";

const Checkbox = ({ item, checked, onChecked }) => {
  const { id, label } = item
  return (
    <div>
      <input type="checkbox" id={label} checked={checked[id]} onChange={(e) => onChecked(e.target.checked, item)} />
      <label htmlFor={label}>{label}</label> {id}
    </div>
  );
};

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChecked = (check, node) => {
    setChecked(prev => {
      const newChecked = { ...prev, [node.id]: check }
      const updateChildren = (node) => {
        node.children?.forEach(child => {
          newChecked[child.id] = check
        child && updateChildren(child)
        })
      }

      updateChildren(node)


      const verifyChecked = (node) => {
        if(!node.children) return newChecked[node.id] || false
        const childNode = []
         node.children.forEach(child => {
          const check = verifyChecked(child)
          childNode.push(check) 
        })

        const allChildChecked = childNode?.every(node => node)
        newChecked[node.id] = allChildChecked
        return allChildChecked
      } 

      checkboxesData?.forEach(data=> verifyChecked(data))


      return newChecked
    })

  }

  console.log(checked,"checked")

  return (
    <div>
      {data?.map(item => {
        return (
          <div key={item.id}>
            <Checkbox item={item} checked={checked} onChecked={handleChecked} />
            {item?.children &&
              <div style={{ marginLeft: "1rem" }}>
                <Checkboxes data={item?.children} checked={checked} setChecked={setChecked} />
              </div>
            }

          </div>)
      })}
    </div>
  );
};

export default Checkboxes;
