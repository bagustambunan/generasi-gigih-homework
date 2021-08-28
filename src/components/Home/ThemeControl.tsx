import { toggleModeType } from '../../libs/types';

function ThemeControl() {
  const themeList = [
    {
      themeName: 'theme-light-green',
      themeColor: '#1ED760',
    },
    {
      themeName: 'theme-dark-yellow',
      themeColor: '#FFED4C',
    },
    {
      themeName: 'theme-light-pink',
      themeColor: '#FA6791',
    },
    {
      themeName: 'theme-dark-blue',
      themeColor: '#4AA8E6',
    },
    // {
    //   themeName: 'theme-dark-purple',
    //   themeColor: '#C46EF5',
    // },
  ];

  function changeTheme(themeName: string) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  function ToggleMode({ themeName, themeColor }: toggleModeType) {
    return (
      <div className="mode-wrapper">
        <div
          className="btn-mode"
          style={{ backgroundColor: themeColor }}
          onClick={() => {
            changeTheme(themeName);
          }}
        />
      </div>
    );
  }

  return (
    <>
      {themeList.map((item) => (
        <ToggleMode themeName={item.themeName} themeColor={item.themeColor} />
      ))}
    </>
  );
}

export default ThemeControl;
