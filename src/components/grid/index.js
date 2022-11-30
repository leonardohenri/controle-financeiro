import React from "react";
import * as B from "../grid/styles";
import GridItem from "../gridItem";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <B.Table>
      <B.Thead>
        <B.Tr>
          <B.Th width={40}>Descrição</B.Th>
          <B.Th width={40}>Valor</B.Th>
          <B.Th width={10} alignCenter>
            Tipo
          </B.Th>
          <B.Th width={10}></B.Th>
        </B.Tr>
      </B.Thead>
      <B.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </B.Tbody>
    </B.Table>
  );
};
export default Grid;


