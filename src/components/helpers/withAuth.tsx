import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

interface Props {
  // add any additional props that your wrapped component accepts
}

const withAuth = (WrappedComponent: React.ComponentType<Props>) => (props: Props) => {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const token = localStorage.getItem("userToken");
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  if (!token) {
    router.replace("/login");
    return null;
  }

  return hasMounted && <WrappedComponent {...props} />;
};

export default withAuth;
