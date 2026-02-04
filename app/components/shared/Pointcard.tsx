import IconDot from '@components/shared/IconDot';

interface PointCardProp {
  point: string;
  description: string;
  moreInfo?: string;
  icon: any;
}

function PointCard({ icon, moreInfo, description, point }: PointCardProp) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center shadow-lg rounded-full border-b-2 h-80 w-80 hover:scale-105 border-slate-600 p-4 hover:border-primaryGreen">
      <IconDot
        icon={icon}
        circleDimensions="h-[30px] w-[30px]"
        containerDimensions="h-[90px] w-[90px]"
        iconSize="text-[60px]"
      />
      <div className="flex justify-center items-center flex-col gap-7.5 p-3 tracking-widest">
        <h2 className="font-semibold text-center text-xl md:text-2xl">
          {point}
        </h2>
        <p className="flex text-slate-600 text-xs w-[80%] md:text-[16px] text-center tracking-wider leading-loose">
          {description}
        </p>
        {moreInfo && (
          <p className="flex gap-3 items-center text-[10px] md:text-[11px] font-semibold justify-center">
            <span className="w-1 md:w-2 h-1 md:h-2 bg-navyblue rounded-full" />
            {moreInfo}
          </p>
        )}
      </div>
    </div>
  );
}

export default PointCard;
