import {
  TbApi,
  TbBrandCSharp,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandMysql,
  TbBrandNodejs,
  TbBrandNpm,
  TbBrandPhp,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandThreejs,
  TbBrandUnity,
  TbBrandVite,
  TbBrandWordpress,
  TbMailFilled,
  TbUxCircle,
} from "react-icons/tb";

import {
  SiAdobecreativecloud,
  SiExpo,
  SiBem,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeillustrator,
} from "react-icons/si";

import { FaFileArrowDown } from "react-icons/fa6";
import { BiLogoBlender } from "react-icons/bi";
import { RiJavascriptLine } from "react-icons/ri";

const StackIcon = ({ icon, className }) => (
  <>
    {icon == "three" && <TbBrandThreejs className={className} />}
    {icon == "react" && <TbBrandReact className={className} />}
    {icon == "vite" && <TbBrandVite className={className} />}
    {icon == "npm" && <TbBrandNpm className={className} />}
    {icon == "blender" && <BiLogoBlender className={className} />}
    {icon == "expo" && <SiExpo className={className} />}
    {icon == "node" && <TbBrandNodejs className={className} />}
    {icon == "js" && <RiJavascriptLine className={className} />}
    {icon == "mysql" && <TbBrandMysql className={className} />}
    {icon == "git" && <TbBrandGit className={className} />}
    {icon == "uxui" && <TbUxCircle className={className} />}
    {icon == "figma" && <TbBrandFigma className={className} />}
    {icon == "adobe" && <SiAdobecreativecloud className={className} />}
    {icon == "html" && <TbBrandHtml5 className={className} />}
    {icon == "css" && <TbBrandCss3 className={className} />}
    {icon == "wordpress" && <TbBrandWordpress className={className} />}
    {icon == "php" && <TbBrandPhp className={className} />}
    {icon == "unity" && <TbBrandUnity className={className} />}
    {icon == "csharp" && <TbBrandCSharp className={className} />}
    {icon == "api" && <TbApi className={className} />}
    {icon == "tailwind" && <TbBrandTailwind className={className} />}
    {icon == "bem" && <SiBem className={className} />}
    {icon == "ps" && <SiAdobephotoshop className={className} />}
    {icon == "ae" && <SiAdobeaftereffects className={className} />}
    {icon == "pr" && <SiAdobepremierepro className={className} />}
    {icon == "ai" && <SiAdobeillustrator className={className} />}

    {icon == "mail" && <TbMailFilled className={className} />}
    {icon == "cv" && <FaFileArrowDown className={className} />}
  </>
);

export default StackIcon;
