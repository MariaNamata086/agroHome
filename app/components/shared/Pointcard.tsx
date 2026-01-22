import IconDot from '@components/shared/IconDot';

interface PointCardProp {
  point: string;
  description: string;
  moreInfo?: string;
  icon: any;
}

function PointCard({ icon, moreInfo, description, point }: PointCardProp) {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-87.5 shadow-sm rounded-full border-b bover:scale-105 border-slate-600 hover:border-primaryGreen">
      <IconDot
        icon={icon}
        circleDimensions="h-[20px] w-[20px]"
        containerDimensions="h-[75px] w-[75px]"
        iconSize="text-[50px]"
      />
      <div className="flex flex-col gap-7.5 p-3 tracking-wider">
        <h2 className="font-semibold text-center text-xl md:text-xl">
          {point}
        </h2>
        <p className="text-slate-500 text-xs md:text-md text-center tracking-wider leading-loose">
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
