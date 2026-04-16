export default function MapView() {
  return (
    <div className="h-[calc(100vh-200px)] bg-gray-100 rounded-2xl flex items-center justify-center">
      <div className="text-center text-gray-400">
        <div className="text-6xl mb-4">🗺️</div>
        <p className="text-base font-medium text-gray-600">
          카카오맵 연동 예정
        </p>
        <p className="text-sm mt-1">API 연결 후 실제 지도로 교체됩니다</p>
      </div>
    </div>
  );
}
