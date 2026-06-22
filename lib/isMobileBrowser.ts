type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: {
    mobile?: boolean;
  };
};

export function isMobileBrowser() {
  if (typeof window === "undefined") {
    return false;
  }

  const userAgentData = (window.navigator as NavigatorWithUserAgentData).userAgentData;

  if (typeof userAgentData?.mobile === "boolean") {
    return userAgentData.mobile;
  }

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent,
  );
}