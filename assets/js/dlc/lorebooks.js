// DLC 선택 항목(id) -> 로어북 엔트리들의 매핑을 정의합니다.
// 필요 시 이 레지스트리에 엔트리를 계속 추가하면 병합 결과에 반영됩니다.
(function(){
	// 공통: Risu 형식 출력 래퍼 생성기
	function toRisu(entries){
		return {
			type: 'risu',
			ver: 1,
			data: entries.map((e, i)=>{
				const out = {
					key: e.key,
					comment: e.comment || '',
					content: e.content,
					mode: e.mode || 'normal',
					insertorder: (e.insertorder !== undefined ? e.insertorder : (100 + i)),
					alwaysActive: !!e.alwaysActive,
					secondkey: e.secondkey || '',
					selective: !!e.selective,
					useRegex: !!e.useRegex
				};
				// Preserve folder assignment and bookVersion if provided (needed by Risu to group entries)
				if (e.folder) out.folder = e.folder;
				if (e.bookVersion !== undefined) out.bookVersion = e.bookVersion;
				return out;
			})
		};
	}

	// 샘플 매핑: 실제 DLC 항목 ID를 키로 사용하세요.
	const LOREBOOK_REGISTRY = {
		// 캐릭터 예시
		'dlc-char-aria-alt': [
			{ key: '아리아(확장)', comment: '아리아 확장 캐릭터', content: '아리아 확장에 대한 설정과 대사.', alwaysActive: true }
		],
		// 컨텐츠/이벤트도 같은 방식으로 추가하세요.
		'ev-festival-001': [
			{ key: '루미나 축제', comment: '루미나 봄맞이 축제', content: '축제 기간 동안 등장하는 이벤트 관련 정보.' }
			],
			// 지역 DLC: 루미나 세부 선택
			'loc-lumina-city': [
				// 파일 기반을 쓰지 않고, 간단 매핑으로도 가능하지만
				// 현재는 데이터 폴더에서 분리 저장하므로, 다운로드 시 파일 로딩이 필요하면 확장하세요.
				{ key: 'Lumina, 루미나', comment: '지역 DLC - 루미나 도시 확장', content: '데이터 파일에 저장된 본문이 사용됩니다.' }
			],
			'loc-lumina-surroundings': [
				{ key: 'Lumina 주변', comment: '지역 DLC - 루미나 근교 확장', content: '데이터 파일에 저장된 본문이 사용됩니다.' }
			]
	};

	// 외부에서 접근할 수 있도록 전역에 노출
	window.DLC_LOREBOOKS = {
		registry: LOREBOOK_REGISTRY,
		toRisu
	};
})();
