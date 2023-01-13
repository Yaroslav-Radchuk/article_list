import React from 'react';

import './KeywordsHightlight.scss';

type Props = {
  string: string | any;
  filter: string | any;
}

export const KeywordsHightlight: React.FC<Props> = ({ string, filter }) => {
  if (!filter) {
    return string;
  }

  const regexp = new RegExp(filter, 'ig');
  const match = string?.match(regexp);

  if (match) {
    return string?.split(regexp).map((
      item: string,
      index: number,
      array: string[],
    ) => {
      if (index < array.length - 1) {
        const start = match.shift();

        return (
          <>
            {item}
            <span className="hightlight">
              {start}
            </span>
          </>
        );
      }

      return item;
    });
  }

  return string;
};
