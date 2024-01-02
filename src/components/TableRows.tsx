import React from 'react'

interface TableRowsProps {
  player: string;
  name: string;
  team: string;
  rental: string;
}


const TableRows: React.FC<TableRowsProps> = ({player, name, team, rental}) => {
  return (
    <div>
      <tr>
          <td>{player}</td>
          <td>{name}</td>
          <td>{team}</td>
          <td>{rental}</td>
      </tr>
    </div>
  )
}

export default TableRows