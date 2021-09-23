// Link to brand book:
// https://leenus.invisionapp.com/console/Brand-book-ckc32ezng00w60111pa4nt37q/ckc4tmuie00cn017zianygjy8/play

import { SvgIcon } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { createTheme, lighten } from "@material-ui/core/styles";
import React from "react";
import { CustomStepIcon } from "@lenuus/icons";

type leenusTheme = {
  colors: Colors;
  fontFamily: string;
  input: {
    [key: string]: string;
  };
  chatMessageBorderRadius: number;
  borderRadius: number;
};

type Colors = {
  Primary: string;
  PrimaryHover: string;
  Secondary: string;
  Tetriary: string;
  GreenGradient: string;
  WorkoutBlue: string;

  Error: string;
  CalorieLine: string;
  Pending: string;
  FollowUp: string;
  DangerBtn: string;
  DangerBtnHover: string;

  ErrorBG: string;
  ErrorStroke: string;
  Warning: string;
  WarningStroke: string;
  SuccessBG: string;
  Success: string;

  TextPrimary: string;
  TextSecondary: string;
  InputLabel: string;
  Divider: string;
  MessageBg: string;
  LightBg: string;

  IconLightGray: string;
  InputFieldBorder: string;
  InputFieldPlaceholder: string;

  Disputed: string;

  TopNavBarBg: string;
  PageBg: string;

  // Deprecated...
  gray: string;
  grayLight: string;
  grayDark: string;
  darkGray: string;

  gray500: string;
  gray700: string;

  greenGray100: string;

  green: string;

  green700: string;

  blackGreen: string;
  black: string;
  blackLight: string;
  white: string;
  orange: string;
  yellow700: string;
  red: string;
  redLight: string;
  purple: string;

  paymentHistory: {
    paymentReAdded: string;
    voided: string;
    disputeLost: string;
    disputed: string;
    succeeded: string;
  };
};

const theme: leenusTheme = {
  colors: {
    Primary: "#FF00FF",
    PrimaryHover: "#0c3ec0",
    Secondary: "#525661",
    Tetriary: "#25AD60",
    GreenGradient: "#68C085",
    WorkoutBlue: "#4F7BEC",

    grayLight: "#F5F5F5",
    DangerBtn: "#DD1717",
    DangerBtnHover: "#BF0404",
    Error: "#FF0049",
    CalorieLine: "#2F80ED",
    Pending: "#F2C94C",
    FollowUp: "#9B51E0",

    ErrorBG: "#cf504a",
    ErrorStroke: "#F0DBDA",
    Warning: "#FFC700",
    WarningStroke: "#F7ECB7",
    SuccessBG: "#eef2fe",
    Success: "#4CAF50",

    TextPrimary: "#333333",
    TextSecondary: "#638388",
    InputLabel: "#A1B4B8",
    Divider: "#DAD9D9",
    MessageBg: "#F0F2F3",
    LightBg: "#F6F8F8",

    IconLightGray: "#AABBBF",
    InputFieldBorder: "#D6E0E4",
    InputFieldPlaceholder: "#ACBDC1",

    Disputed: "#E59C59",

    TopNavBarBg: "#312E2E",
    PageBg: "#F1EFF0",

    // Deprecated...
    gray: "#ECECEC",
    grayDark: "#E6EFED",
    darkGray: "#8CA19D",

    gray500: "#646B72",
    gray700: "#474b50",

    greenGray100: "#d5dddb",

    green: "#2A5FE8",

    green700: "#005442",

    blackGreen: "#423D3E",
    black: "#252B31",
    blackLight: "#4C5E63",
    white: "#FFFFFF",
    orange: "#F57C00",
    yellow700: "#BF9522",
    red: "#A70303",
    redLight: "#ED3B2F",
    purple: "#AB47BC",

    paymentHistory: {
      paymentReAdded: "#D3B81C",
      disputed: "#E59C59",
      disputeLost: "#E59C59",
      succeeded: "#4A9D86",
      voided: "#8A9EA3",
    },
  },

  fontFamily: "Open Sans, system-ui, sans-serif",

  input: {
    placeholderColor: "#ACBDC1",
    borderColor: "#D6E0E4",
    borderColorFocus: "#2A5FE8",
    fontColor: "#312E2E",
    disabledFontColor: "#312E2E38",
  },

  chatMessageBorderRadius: 12,
  borderRadius: 4,
};

/** @deprecated use the spacing system available in the material ui theme */
export const spacing = {
  xxxs: 1,
  xxs: 2,
  xs: 4,
  s: 6,
  m: 8,
  l: 12,
  xl: 16,
  xxl: 20,
  xxxl: 26,
} as const;

const baseMuiTheme = createTheme({
  typography: {
    fontFamily: [
      '"Open Sans"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 15,
    body1: {
      fontSize: 15,
      lineHeight: "140%",
      fontWeight: "normal",
      letterSpacing: "-0.011em",
    },
    body2: {
      fontSize: 14,
      lineHeight: "140%",
      fontWeight: "normal",
      letterSpacing: "-0.006em",
    },
    subtitle1: {
      fontSize: 15,
      fontWeight: 600, // semibold
      lineHeight: "140%",
      letterSpacing: "-0.004em",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500, // medium
      lineHeight: "140%",
      letterSpacing: "-0.006em",
    },
    caption: {
      fontSize: 12,
      lineHeight: "140%",
      fontWeight: "normal",
      letterSpacing: "0",
    },
    overline: {
      fontSize: 12,
      lineHeight: "140%",
      fontWeight: "normal",
      letterSpacing: "-0.04em",
    },
    h1: {
      fontSize: 80,
      fontWeight: "normal",
      lineHeight: "140%",
      letterSpacing: "-0.022em",
    },
    h2: {
      fontSize: 40,
      fontWeight: "normal",
      lineHeight: "140%",
      letterSpacing: "-0.022em",
    },
    h3: {
      fontWeight: "normal",
      fontSize: 28,
      lineHeight: "140%",
      letterSpacing: "-0.021em",
    },
    h4: {
      fontWeight: "normal",
      fontSize: 20,
      lineHeight: "140%",
      letterSpacing: "-0.019em",
    },
    h5: {
      fontWeight: 600, // semibold
      fontSize: 18,
      lineHeight: "140%",
      letterSpacing: "-0.016em",
    },
    h6: {
      fontWeight: 500, // medium
      fontSize: 16,
      lineHeight: "140%",
      letterSpacing: "-0.017em",
    },
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: theme.colors.Primary,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: theme.colors.Secondary,
      // dark: will be calculated from palette.secondary.main,
    },
    error: {
      main: theme.colors.ErrorBG,
    },
    warning: {
      main: theme.colors.Warning,
    },
    info: {
      main: theme.colors.CalorieLine,
    },
    success: {
      main: theme.colors.Tetriary,
    },
    text: {
      primary: "#312E2E",
      secondary: "#737171",
      disabled: "#C1C0C0",
    },
    action: {
      active: "#757575",
      hover: "#F5F5F5",
      selected: "#EBEBEB",
      disabled: "#BDBDBD",
      disabledBackground: "#E0E0E0",
      focus: "#E0E0E0",
    },
  },
  shadows: [
    "none",
    "0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);", // Overwritten
    "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12);", // Overwritten
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
});

export const materialUiTheme = createTheme({
  ...baseMuiTheme,
  components: {
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          fontSize: "14px", // so larger number fits into an avatar
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: blue[200],
          height: "32px",
          width: "32px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: { textTransform: "inherit" },
        sizeSmall: {
          fontWeight: 500, // medium
          fontSize: 13,
          lineHeight: "22px",
          letterSpacing: "0.003em",
        },
        sizeMedium: {
          fontWeight: 600, // semibold
          fontSize: 14,
          lineHeight: "24px",
          letterSpacing: "0.06em",
        },
        sizeLarge: {
          fontWeight: 600, // semibold
          fontSize: 15,
          lineHeight: "25px",
          letterSpacing: "-0.009em",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)",
          height: "100%",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            padding: spacing.xl,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.colors.Secondary,
          fontSize: "12px",
          letterSpacing: "0.025em",
        },
        tooltipPlacementTop: {
          marginBottom: "8px", // same as spacing(1)
        },
        arrow: { color: theme.colors.Secondary },
      },
      defaultProps: {
        placement: "top",
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: { opacity: "0.28" },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        checkedIcon: (
          <SvgIcon viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7ZM16.7863 9.11782C17.1276 8.68355 17.0521 8.05489 16.6178 7.71368C16.1836 7.37247 15.5549 7.4479 15.2137 7.88218L10.4772 13.9105L8.76825 11.8598C8.41468 11.4355 7.78412 11.3782 7.35984 11.7318C6.93556 12.0853 6.87824 12.7159 7.2318 13.1402L9.7318 16.1402C9.92502 16.372 10.2126 16.5042 10.5144 16.4999C10.8162 16.4956 11.0999 16.3551 11.2863 16.1178L16.7863 9.11782Z"
              fill="inherit"
            />
          </SvgIcon>
        ),
        indeterminateIcon: (
          <SvgIcon viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
              fill="inherit"
            />
          </SvgIcon>
        ),
        icon: (
          <SvgIcon viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5ZM7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7Z"
              fill="inherit"
            />
          </SvgIcon>
        ),
      },
    },
    MuiDialog: {
      defaultProps: {
        BackdropProps: {
          sx: {
            backgroundColor: "rgb(82, 86, 97, 0.72)",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
      },
    },
    MuiToggleButton: {},
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          height: "65px",
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
        },
      },
    },
    MuiStepLabel: {
      defaultProps: {
        StepIconComponent: (props) => <CustomStepIcon {...props} />,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: {
          backgroundColor: lighten(baseMuiTheme.palette.secondary.main, 0.92),
          "&.Mui-disabled": {
            opacity: "0.3",
            backgroundColor: lighten(baseMuiTheme.palette.secondary.main, 0.92),
          },
          "& svg": {
            "&:hover": {
              fill: baseMuiTheme.palette.secondary.dark,
            },
          },
          "&:hover": {
            backgroundColor: lighten(baseMuiTheme.palette.secondary.main, 0.92),
          },
        },
      },
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Lab components are missing in theme type
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: "#E5E7EB",
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});
export default theme;
