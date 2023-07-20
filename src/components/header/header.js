import { CurrentUser } from "../item";

export const Header = ({ currentUser }) => {
  return (
    <div>
      <div>Информация в шапке приложения</div>;
      <CurrentUser currentUser={currentUser}></CurrentUser>
    </div>
  );
};
