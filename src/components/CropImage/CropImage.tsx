import * as React from 'react';
import Cropper, { Area } from 'react-easy-crop';
import { useRecoilState } from 'recoil';
import { croppedImageStore } from '~/store/modalCreatePostAtom';
import getCroppedImg from '~/utils/helper/crop-image';
import { useCropImageStyle } from './CropImage.style';

export interface CropImageChangeEvent {
  croppedAreaPixels: Area | null;
  rotation: number;
}

interface CropImageProps {
  img: string;
  onChange?: (e: CropImageChangeEvent) => void;
}

const CropImage: React.FC<CropImageProps> = (props) => {
  const { img, onChange } = props;

  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [rotation, setRotation] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState<Area | null>(null);

  const classes = useCropImageStyle();

  const onCropComplete = React.useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // const onClose = React.useCallback(() => {
  //   setCroppedImg(null);
  // }, []);

  React.useEffect(() => {
    onChange?.({ croppedAreaPixels, rotation });
  }, [croppedAreaPixels, onChange, rotation]);

  return (
    <div className={classes.container}>
      <Cropper
        image={img}
        crop={crop}
        rotation={rotation}
        zoom={zoom}
        aspect={1}
        cropSize={{ height: 500, width: 500 }}
        onCropChange={setCrop}
        onRotationChange={setRotation}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </div>
  );
};

export default React.memo(CropImage);
