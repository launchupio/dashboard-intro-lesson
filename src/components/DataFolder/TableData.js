import smiley from "../../images/smiley.jpeg";
import xdlogo from "../../images/xd.png";
import letterlogo from "../../images/a.jpeg";
import slacklogo from "../../images/slack.png";
import spotifylogo from "../../images/spotify.jpeg";
import bluelogo from "../../images/blue.png";
import redsquare from "../../images/redsquare.png";

export const tableData = [
  {
    logo: xdlogo,
    project: "Material XD Version",
    members: [
      {
        profile: smiley,
        name: "Jane Simmons",
        stackOrder: 0,
        left: "left-[0px]",
      },
      {
        profile: smiley,
        name: "Jon Doe",
        stackOrder: 1,
        left: "left-[15px]",
      },
      {
        profile: smiley,
        name: "Rumi Hadid",
        stackOrder: 2,
        left: "left-[30px]",
      },
      {
        profile: smiley,
        name: "Jane Doe",
        stackOrder: 3,
        left: "left-[45px]",
      },
    ],
    budget: "$14,000",
    completion: 60,
  },
  {
    logo: letterlogo,
    project: "Add Progress Track",
    members: [
      {
        profile: smiley,
        name: "Rumi Hadid",
        stackOrder: 0,
        left: "left-[0px]",
      },
      {
        profile: smiley,
        name: "Jessica Doe",
        stackOrder: 1,
        left: "left-[15px]",
      },
    ],
    budget: "$3,000",
    completion: 10,
  },
  {
    logo: slacklogo,
    project: "Fix Platform Errors",
    members: [
      {
        profile: smiley,
        name: "Marissa Ro",
        stackOrder: 0,
        left: "left-[0px]",
      },
      {
        profile: smiley,
        name: "Jane Doe",
        stackOrder: 1,
        left: "left-[15px]",
      },
    ],
    budget: "Not set",
    completion: 100,
  },
  {
    logo: spotifylogo,
    project: "Launch our Mobile App",
    members: [
      {
        profile: smiley,
        name: "Jane Dems",
        stackOrder: 0,
        left: "left-[0px]",
      },
      {
        profile: smiley,
        name: "Rick Wills",
        stackOrder: 1,
        left: "left-[15px]",
      },
      {
        profile: smiley,
        name: "Jen Akins",
        stackOrder: 2,
        left: "left-[30px]",
      },
      {
        profile: smiley,
        name: "Stuart Little",
        stackOrder: 3,
        left: "left-[45px]",
      },
    ],
    budget: "$20,500",
    completion: 100,
  },
  {
    logo: bluelogo,
    project: "Add the New Pricing Page",
    members: [
      {
        profile: smiley,
        name: "Ron Doe",
        stackOrder: 0,
        left: "left-[0px]",
      },
    ],
    budget: "$500",
    completion: 25,
  },
  {
    logo: redsquare,
    project: "Redesign New Online Shop",
    members: [
      {
        profile: smiley,
        name: "Jane Wane",
        stackOrder: 0,
        left: "left-[0px]",
      },
      {
        profile: smiley,
        name: "Tiger Woods",
        stackOrder: 1,
        left: "left-[15px]",
      },
    ],
    budget: "$2,000",
    completion: 40,
  },
];
