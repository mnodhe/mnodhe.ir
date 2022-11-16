import { useIntl } from "react-intl";
import { LangInterface } from "./LangInterface";
export const LangHelper = (data: string) => {
  const intl = useIntl();
  return intl.formatMessage({ id: data });
};
export const LangHelperAll = () => {
  const intl = useIntl();
  return intl.messages;
};
