'use client';

type ChainsTableCellHeadProps = {
  title: string;
  handleAbsSorting?: () => void;
  handleDescSorting?: () => void;
};

export const HomeSectionChainsTableCellHead = ({
  title,
  handleAbsSorting,
  handleDescSorting,
}: ChainsTableCellHeadProps) => (
  <th>
    <div>
      {(handleAbsSorting || handleDescSorting) && (
        <div>
          {handleAbsSorting && (
            <button onClick={handleAbsSorting}>
              asc
            </button>
          )}

          {handleDescSorting && (
            <button onClick={handleDescSorting}>
             desc
            </button>
          )}
        </div>
      )}

      <span>{title}</span>
    </div>
  </th>
);
