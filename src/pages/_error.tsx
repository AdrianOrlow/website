import React from 'react';

interface Props {
  statusCode: number;
}

const Error = ({ statusCode }: Props) => (
  <main>
    {statusCode}
  </main>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
