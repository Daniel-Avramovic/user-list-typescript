import React, { FC } from "react";
import { Card } from "antd";
type Props = {
    users:Array<object>
  };
const GridView: FC<Props> = ({users}) => {
     console.log(users)
  const stule = { width: "25%", padding: "10px", border: "none " };
  const { Meta } = Card;
  return (
    <main className="container">
      {users.map((user: any, index: number) => {
        const formatedName: string = `${user.name.first} ${user.name.last}`;
        return (
          <Card
            key={index}
            hoverable
            style={stule}
            cover={<img alt="example" src={user.picture.large} />}
          >
            <Meta title={formatedName} description={user.email} />
          </Card>
        );
      })}
    </main>
  );
};

export default GridView;